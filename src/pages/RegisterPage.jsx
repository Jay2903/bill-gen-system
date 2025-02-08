import  { useState } from "react";

const RegisterPage = () => {
  const [role, setRole] = useState(""); // State for the role field
  const [biometric, setBiometric] = useState(""); // State for the biometric field
  const [formData, setFormData] = useState({
    username: "",
    collegeName: "",
    department: "",
    designation: "",
    email: "",
    mobile: "",
    address: "",
    bankName: "",
    branchName: "",
    accountType: "",
    accountNumber: "",
    ifscCode: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const validationErrors = {};
    // Basic details validation
    if (!formData.username) validationErrors.username = "User Name is required.";
    if (!formData.collegeName) validationErrors.collegeName = "College Name is required.";
    if (!formData.department) validationErrors.department = "Department is required.";
    if (!formData.designation) validationErrors.designation = "Designation is required.";
    if (!formData.email) validationErrors.email = "Email ID is required.";
    if (!formData.mobile) validationErrors.mobile = "Mobile Number is required.";
    if (!formData.address) validationErrors.address = "Address is required.";
    if (!formData.bankName) validationErrors.bankName = "Bank Name is required.";
    if (!formData.branchName) validationErrors.branchName = "Branch Name is required.";
    if (!formData.accountType) validationErrors.accountType = "Account Type is required.";
    if (!formData.accountNumber) validationErrors.accountNumber = "Account Number is required.";
    if (!formData.ifscCode) validationErrors.ifscCode = "IFSC Code is required.";

    // Biometric validation based on role
    if (role === "Internal" && !biometric) {
      validationErrors.biometric = "Biometric Number is required for Internal role.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Log all the form data including the biometric number if Internal role is selected
      const dataToShow = { ...formData, role, biometric }; // Add biometric data if role is Internal
      console.log("Form Data Submitted:", dataToShow);
      alert("Form Submitted");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-blue-900">Quick Bill</h1>
        </div>
      </header>

      {/* Registration Form */}
      <div className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Registration
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 space-y-8"
        >
          {/* Basic Details */}
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Basic Details:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Name */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                User Name *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Write name and surname as per your bank account"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.username && <p className="text-xs text-red-500">{errors.username}</p>}
            </div>

            {/* College Name/Industry Name */}
            <div>
              <label
                htmlFor="collegeName"
                className="block text-sm font-medium text-gray-600"
              >
                College Name/Industry Name *
              </label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.collegeName && <p className="text-xs text-red-500">{errors.collegeName}</p>}
            </div>

            {/* Department */}
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-600"
              >
                Department *
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.department && <p className="text-xs text-red-500">{errors.department}</p>}
            </div>

            {/* Designation */}
            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-600"
              >
                Designation *
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.designation && <p className="text-xs text-red-500">{errors.designation}</p>}
            </div>

            {/* Email ID */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email ID *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-600"
              >
                Mobile Number *
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.mobile && <p className="text-xs text-red-500">{errors.mobile}</p>}
            </div>

            {/* College/Industry Address and Role */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  College/Industry Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.address && <p className="text-xs text-red-500">{errors.address}</p>}
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-600"
                >
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Role</option>
                  <option value="Internal">Internal</option>
                  <option value="External">External</option>
                </select>
                {errors.role && <p className="text-xs text-red-500">{errors.role}</p>}
              </div>
            </div>

            {/* Biometric Number */}
            {role === "Internal" && (
              <div className="col-span-1">
                <label
                  htmlFor="biometric"
                  className="block text-sm font-medium text-gray-600"
                >
                  Biometric Number *
                </label>
                <input
                  type="text"
                  id="biometric"
                  name="biometric"
                  value={biometric}
                  onChange={(e) => setBiometric(e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.biometric && <p className="text-xs text-red-500">{errors.biometric}</p>}
              </div>
            )}
          </div>

          {/* Account Details */}
          <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">
            Account Details:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="bankName"
                className="block text-sm font-medium text-gray-600"
              >
                Bank Name *
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.bankName && <p className="text-xs text-red-500">{errors.bankName}</p>}
            </div>

            <div>
              <label
                htmlFor="branchName"
                className="block text-sm font-medium text-gray-600"
              >
                Bank Branch Name *
              </label>
              <input
                type="text"
                id="branchName"
                name="branchName"
                value={formData.branchName}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.branchName && <p className="text-xs text-red-500">{errors.branchName}</p>}
            </div>

            <div>
              <label
                htmlFor="accountType"
                className="block text-sm font-medium text-gray-600"
              >
                Account Type *
              </label>
              <input
                type="text"
                id="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.accountType && <p className="text-xs text-red-500">{errors.accountType}</p>}
            </div>

            <div>
              <label
                htmlFor="accountNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Account Number *
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.accountNumber && <p className="text-xs text-red-500">{errors.accountNumber}</p>}
            </div>

            <div>
              <label
                htmlFor="ifscCode"
                className="block text-sm font-medium text-gray-600"
              >
                IFSC Code *
              </label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.ifscCode && <p className="text-xs text-red-500">{errors.ifscCode}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
          <div className="text-sm text-center mt-4">
  Already have an account?{" "}
  <a href="/" className="text-blue-500 hover:underline">
    Sign In
  </a>
</div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
