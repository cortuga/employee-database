import React from 'react';

const EmployeeDetails = () => {

  const fetchData = async () => {
    const response = await axios.get(``)


  return (
    <div>
      
    </div>
  );
}

export default EmployeeDetails

//   id	integer($int32)
//   firstName	string
//   lastName	string
//   birthday	string($date - time)
//   hiredDate	string($date - time)
//   isFullTime	boolean
//   profileImage	string
//   jobTitle	string
//   jobDescription	string
//   phoneNumber	string
//   interestingFact	string
//   address	string
//   city	string
//   zip	string
//   state	string
//   salary	number($double)
//   gender	string
//   email	string
//   emergencyContactPerson	string
//   emergencyContactPhone	string
//   emergencyContactAddress	string
//   ptoHours	integer($int32)
//   companyKey	string
// }
