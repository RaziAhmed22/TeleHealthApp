const express = require("express");
const bodyParser=require('body-parser');
const fileUpload=require('express-fileupload');
const FileType = require('file-type');
const cors=require('cors');
const knex=require('knex');
const bcrypt=require('bcrypt-nodejs');
const doctor_db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '123',
    database : 'doctordatabase'
  }
});
const patient_db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '123',
    database : 'patientdatabase'
  }
});
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded( {extended:false} ));
app.use(bodyParser.json());
app.use(fileUpload());

app.get('/',(req,res)=>{
	res.send('it is working')
})
app.get('/doctors',(req,res)=>{
	doctor_db.select('*').from('user_doctor')
		.then(doc=>{
			res.json(doc);
		})
})

app.post('/doctor_signin',(req,res)=>{
	// const {email,password}=req.body;
	doctor_db.select('email','hash').from('login_user')
		.where('email','=',req.body.email)
		.then(data=>{
			const isValid=bcrypt.compareSync(req.body.password,data[0].hash);
			if (isValid){
				return doctor_db.select('*').from('user_doctor')
					.where('email','=',req.body.email)
					.then(user=>{
						res.json(user[0]);
					})
					.catch(err=>res.status(400).json('unable to get user'));
			}else{
				res.status(400).json('wrong credentials')
			}
		})
		.catch(error=>res.status(400).json('wrong credential')); 
})
app.post('/doctor_register',(req,res)=>{
	const {id,name,speciality,contact,email,password,MRN}=req.body;
	const hash= bcrypt.hashSync(password);
		doctor_db.transaction(trx=>{
			trx.insert({
				hash:hash,
				email:email
			})
			.into('login_user')
			.returning('email')
			.then(loginEmail=>{
				return trx('user_doctor')
					.returning('*')
					.insert({
						name:name,
						speciality:speciality,
						contact:contact,
						email:loginEmail[0], 
						mrn:MRN,
						joined:new Date()
					}).then(user=>{
						res.json(user[0]);
					})
			.then(trx.commit)
			.catch(trx.rollback)
			})
		}) .catch(err=>res.status(400).json('unable to access'));
})
app.get('/profile/:id',(req,res)=>{
	const {id}=req.params;
	doctor_db.select('*').from('user_doctor').where({
		id:id 
	}).then(user=>{
		if (user.length){
		res.json(user[0]);
	}else{
		res.status(400).json('Not Found');
	}
	}).catch(err=>{res.status(400).json("error")})
})	
app.listen(process.env.PORT || 3000,()=>{
	console.log(`app is running on ${process.env.PORT}`)
})
app.post('/patient_register',(req,res)=>{
	const {id,firstname,lastname,birthday,age,gender,phonenumber,cnic,address,city,province,postalzip,email,password,Name,Relation,Contact,
		EmergencyCNIC,EmergencyEmail,EmergencyAddress,HMR,Operation}=req.body;
	const hash= bcrypt.hashSync(password);
		patient_db.transaction(trx=>{
			trx.insert({
				hash:hash,
				email:email
			})
			.into('login_user')
			.returning('email')
			.then(loginEmail=>{
				return trx('user_patient')
					.returning('*')
					.insert({
						firstname:firstname,
						lastname:lastname,
						birthday:birthday,
						age:age,
						gender:gender, 
						phonenumber:phonenumber,
						patientcnic:cnic,
						address:address,
						city:city,
						province:province,
						postalzipcode:postalzip,
						email:loginEmail[0], 
						joined:new Date(),
						fname:Name,
						relation:Relation,
						ecnic:EmergencyCNIC,
						contact:Contact,
						hmr:HMR,
						operation:Operation,
						eaddress:EmergencyAddress,
						emailaddress:EmergencyEmail
					}) 
					.then(user=>{
						res.json(user[0]);
					})
			.then(trx.commit)
			.catch(trx.rollback)
			})
		}) .catch(err=>console.log(err))
			// .catch(err=>res.status(400).json('unable to access'));
})
app.post('/patient_signin',(req,res)=>{
	// const {email,password}=req.body;
	patient_db.select('email','hash').from('login_user')
		.where('email','=',req.body.email)
		.then(data=>{
			const isValid=bcrypt.compareSync(req.body.password,data[0].hash);
			if (isValid){
				return patient_db.select('*').from('user_patient')
					.where('email','=',req.body.email)
					.then(user=>{
						res.json(user[0]);
					})
					.catch(err=>res.status(400).json('unable to get user'));

			}else{
				res.status(400).json('wrong credentials')
			}
		})
		.catch(error=>res.status(400).json('wrong credential')); 
})
app.post('/patientupload',async (req,res)=>{
	const{name,data}=req.files.patientfile;
	if (name && data){
		await patient_db.insert({
			 name:name,
			 img:data
		}).into('patientdata');
		res.status(200).json('success');
	}else{
		res.status(400).json('failure');
	}
})

app.get('/patientvitals',(req,res)=>{
	patient_db.select('*').from('patientdata')
		.then(doc=>{
			res.json(doc[doc.length-1]);
		})
})