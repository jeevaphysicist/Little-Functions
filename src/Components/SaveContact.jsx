import React from 'react'

const SaveContact = () => {
    const handleSaveClick = () => {

        // Get the contact information
        const contact = {
          name: "TestContact",
          phone: "8900-000-000-000",
          email: "test@example.com"
        };
    
        // Create vCard content
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nTEL;TYPE=work,voice:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`;
        
        // Create Blob object
        const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    
        // Create URL for the Blob
        const url = URL.createObjectURL(blob);
    
        // Create a link element
        const link = document.createElement('a');
    
        // Set attributes for the link
        link.download = `${contact.name}.vcf`;
        link.href = url;
    
        // Simulate a click on the link to trigger the download
        link.click();
      };
  return (
    <div 
    style={{ display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
   }}
    >
    <button onClick={handleSaveClick} style={{backgroundColor:"red",color:'white',padding:"10px 5px"}}>Save Contact</button>
  </div>
  )
}

export default SaveContact