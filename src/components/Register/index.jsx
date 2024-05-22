// import React, { useState } from 'react';
// import "./index.css";
// import FormInput from "../FormInput";
// import Button from "../Button";

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     message: '',
//   });

//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     const areAllFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');

//     if (areAllFieldsFilled) {
//       const emailSubject = 'Novo Formulário de Contato';
//       const emailBody = `
//         Nome: ${formData.name}
//         Sobrenome: ${formData.lastName}
//         Email: ${formData.email}
//         Número de Telefone: ${formData.phoneNumber}
//         Mensagem: ${formData.message}
//       `;

//       const mailToLink = `mailto:danilo.barros3@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

//       window.location.href = mailToLink;

//       setSuccessMessage('Email enviado com sucesso!');
//       setFormData({
//         name: '',
//         lastName: '',
//         email: '',
//         phoneNumber: '',
//         message: '',
//       });
//     } else {
//       setSuccessMessage('Por favor, preencha todos os campos antes de enviar.');
//     }
//   };

//   return (
//     <section id="contact-me">
//       <h2>Contato</h2>
//       <form className="form" onSubmit={(e) => e.preventDefault()}>
//         <div className="form-input">
//           <FormInput
//             id="name"
//             name="name"
//             label="Nome"
//             variant="standard"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <FormInput
//             id="lastName"
//             name="lastName"
//             label="Sobrenome"
//             variant="standard"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-input">
//           <FormInput
//             id="email"
//             name="email"
//             label="Email"
//             variant="standard"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <FormInput
//             id="phoneNumber"
//             name="phoneNumber"
//             label="Número de Telefone"
//             variant="standard"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="message">
//           <FormInput
//             id="message"
//             name="message"
//             label="Mensagem"
//             variant="standard"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="button-submit">
//           <Button text="Enviar agora" variant="contained" style={{ backgroundColor: '#27AE60' }} onClick={handleSubmit} />
//         </div>
//       </form>
//       {successMessage && <p className="success-message">{successMessage}</p>}
//     </section>
//   );
// }

// export default Register;
