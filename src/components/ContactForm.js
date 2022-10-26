// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {
	Button,
	Card,
	CardActions,
	CardContent,
	TextField,
} from "@mui/material";
import { useState } from "react";

const ContactForm = ({ handleSave }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    //const [name, setName] = useState("");
    //const [phone, setPhone] = useState("");
    //const [email, setEmail] = useState("");
    //const [photo, setPhoto] = useState("");

    const defaultContact = {
		name: "",
		phone: "",
		email: "",
		photo: "",
	};

    const [contact, setContact] = useState(defaultContact);

    const handleChange = ({target}) => {
		setContact({
			...contact,
			[target.name]: target.value,
		});
	};

    /*///const handleSubmit = () => {
    //    if (name === "" || phone === "" || email === "" || photo === "")
           return alert("Isi yang benar");
  
        addContact({
           name: name,
           phone: phone,
           email: email,
           photo: photo,
        });
     };*/
  

     return (
		<Card
			sx={{
				".MuiTextField-root": { mb: 2 },
				p: 1,
			}}
			component="form"
			onSubmit={(e) => {
				e.preventDefault();
				handleSave(contact);
				setContact(defaultContact);
			}}
		>
			<CardContent>
				<TextField
					id="filled-basic"
					label="Name"
					variant="filled"
					autoComplete="name"
					required
					name="name"
					value={contact.name}
					fullWidth
					onChange={handleChange}
				/>
				<TextField
					id="filled-basic"
					label="Phone"
					variant="filled"
					required
					name="phone"
					fullWidth
					value={contact.phone}
					onChange={handleChange}
				/>
				<TextField
					id="filled-basic"
					label="Email"
					variant="filled"
					required
					name="email"
					fullWidth
					type={"email"}
					value={contact.email}
					onChange={handleChange}
				/>
				<TextField
					id="filled-basic"
					label="Photo URL"
					variant="filled"
					required
					name="photo"
					fullWidth
					value={contact.photo}
					onChange={handleChange}
				/>
			</CardContent>
			<CardActions>
				<Button size="small" type="submit">
					Add New
				</Button>
			</CardActions>
		</Card>
	);
}

export default ContactForm;