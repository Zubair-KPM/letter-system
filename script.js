 // Function to update the offer letter template with user input
 function generateOfferLetter(event) {
    event.preventDefault();

    // Get input values
    const employeeName = document.getElementById('employeeName').value;
    const offerDate = document.getElementById('date').value;
    const designation = document.getElementById('designation').value;
    const salaryPackage = document.getElementById('package').value;

    // Update the offer letter content
    document.getElementById('letterEmployeeName').textContent = employeeName || '[Employee Name]';
    document.getElementById('letterStartDate').textContent = offerDate || '[Offer Date]';
    document.getElementById('letterDesignation').textContent = designation || '[Designation]';
    document.getElementById('letterSalaryPackage').textContent = salaryPackage || '[Salary Package]';
}

function downloadOfferLetter(event) {
event.preventDefault();

const letterContent = document.getElementById('letterContent');

const options = {
margin: 0,
filename: 'Offer_Letter.pdf',
image: { type: 'jpeg', quality: 1 },
html2canvas: {
    scale: 2,
    scrollX: 0,
    scrollY: 0,
    letterRendering: true,
    useCORS: true,
},
jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
},
};

html2pdf()
.set(options)
.from(letterContent)
.save()
.catch((error) => {
    console.error('PDF Generation Error:', error);
});
}

// Attach event listener for the Download button
document.getElementById('downloadBtn').addEventListener('click', downloadOfferLetter);



// Event listener for form submission
document.getElementById('offerLetterForm').addEventListener('submit', generateOfferLetter);


// Function to open the mail app with a pre-filled email body
function openMailApp(event) {
event.preventDefault();

const employeeName = document.getElementById('employeeName').value;
const offerDate = document.getElementById('date').value;
const designation = document.getElementById('designation').value;
const salaryPackage = document.getElementById('package').value;

const mailtoLink = `mailto:?subject=Offer Letter&body=Dear ${employeeName || '[Employee Name]'},%0D%0A%0D%0A` +
`We are pleased to offer you the position of ${designation || '[Designation]'} at KPM. Your expected start date is ${offerDate || '[Offer Date]'}.%0D%0A%0D%0A` +
`Your salary package will be ${salaryPackage || '[Salary Package]'}.%0D%0A%0D%0A` +
`We look forward to having you on board!%0D%0A%0D%0A` +
`Best regards,%0D%0AKPM`;

window.location.href = mailtoLink;
}

// Event listener for Open Mail App button
document.getElementById('openMailAppBtn').addEventListener('click', openMailApp);
