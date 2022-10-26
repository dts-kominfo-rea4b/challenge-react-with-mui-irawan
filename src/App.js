import './App.css';
//import React, { useState } from "react";
//import Header from "./components/Header";
//import ContactForm from "./components/ContactForm";
//import Contact from "./components/Contact";
//import ScrollToButtom from "react-scroll-to-bottom";
//import { Card, List, CardContent } from "@mui/material";

import { Divider, Grid, List, Paper } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";


// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  //const [data, setData] = useState(contactsJSON);

 
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  /*const addContact = (newContact) => {
    setData([...data, newContact]);
 };*/

 const [contacts, setContacts] = useState([]);

	useEffect(() => {
		setContacts(contactsJSON);
	}, []);

	const addContact = (contact) => {
		setContacts([...contacts, contact]);
	};

  return (
    <div className="App">
			<Header />
			<Grid container spacing={5} paddingX={5}>
				<Grid item xs={12} md={6}>
					<ContactForm handleSave={addContact} />
				</Grid>
				<Grid item xs={12} md={6}>
					<Paper variant="outlined" sx={{ bgcolor: teal[50] }}>
						<List>
							{contacts.map((contact, index) => (
								<div key={index}>
									<Contact data={contact} />
									{index !== contacts.length - 1 && <Divider />}
								</div>
							))}
						</List>
					</Paper>
				</Grid>
			</Grid>
		</div>
  );
};

export default App;
