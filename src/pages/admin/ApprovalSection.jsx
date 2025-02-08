import React from 'react';
import { useSelector } from 'react-redux';

const ApprovalSection = () => {
const users = useSelector((state) => {
  console.log(state);
  return state.registration.users;
});
  return (
    <div>
      <h2>Approval Section</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Username</th>
            <th className="py-2">College Name</th>
            <th className="py-2">Department</th>
            <th className="py-2">Designation</th>
            <th className="py-2">Email</th>
            <th className="py-2">Mobile</th>
            <th className="py-2">Address</th>
            <th className="py-2">Bank Name</th>
            <th className="py-2">Branch Name</th>
            <th className="py-2">Account Type</th>
            <th className="py-2">Account Number</th>
            <th className="py-2">IFSC Code</th>
            <th className="py-2">Role</th>
            <th className="py-2">Biometric</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.collegeName}</td>
              <td className="border px-4 py-2">{user.department}</td>
              <td className="border px-4 py-2">{user.designation}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.mobile}</td>
              <td className="border px-4 py-2">{user.address}</td>
              <td className="border px-4 py-2">{user.bankName}</td>
              <td className="border px-4 py-2">{user.branchName}</td>
              <td className="border px-4 py-2">{user.accountType}</td>
              <td className="border px-4 py-2">{user.accountNumber}</td>
              <td className="border px-4 py-2">{user.ifscCode}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.biometric}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalSection;