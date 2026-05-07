import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [orders, setOrders] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://ecommerce-vhgs.onrender.com/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        setFormData({
          name: res.data.name,
          email: res.data.email,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleUpdate(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .put("https://ecommerce-vhgs.onrender.com/users/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        alert("Profile updated");
      })
      .catch((err) => console.log(err));
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");

    window.location.href = "/";
  }

  async function handleDeleteAccount() {
    const confirmDelete = confirm(
      "Are you sure you want to delete your account?",
    );

    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    try {
      await axios.delete("https://ecommerce-vhgs.onrender.com/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      alert("Account deleted");

      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavBar />

      <div className="px-4 sm:px-6 lg:px-12 py-10 flex justify-center">
        <div className="w-full max-w-2xl border-2 border-slate-200 rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-6">
            <div>
              <h1 className="text-3xl font-semibold text-teal-950">
                My Profile
              </h1>

              <p className="text-slate-500 mt-1">Manage your account details</p>
            </div>

            <button
              onClick={handleLogout}
              className="flex gap-1 text-teal-900 hover:text-teal-600 transition font-medium"
            >
              Sign Out
            </button>
          </div>

          <div className="flex flex-col gap-8 pt-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-slate-500">Name</label>

                <button
                  type="button"
                  onClick={() => setIsEditingName(!isEditingName)}
                  className="text-sm text-teal-700 hover:text-teal-500 transition"
                >
                  {isEditingName ? "Cancel" : "Edit"}
                </button>
              </div>

              {isEditingName ? (
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="flex-1 border-2 border-slate-300 rounded-lg px-4 h-11 outline-none focus:border-teal-700"
                  />

                  <button
                    onClick={handleUpdate}
                    className="bg-teal-900 hover:bg-teal-600 transition text-white px-5 rounded-lg"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p className="text-xl text-teal-950 font-medium">{user.name}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-slate-500">Email</label>

                <button
                  type="button"
                  onClick={() => setIsEditingEmail(!isEditingEmail)}
                  className="text-sm text-teal-700 hover:text-teal-500 transition"
                >
                  {isEditingEmail ? "Cancel" : "Edit"}
                </button>
              </div>

              {isEditingEmail ? (
                <div className="flex gap-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="flex-1 border-2 border-slate-300 rounded-lg px-4 h-11 outline-none focus:border-teal-700"
                  />

                  <button
                    onClick={handleUpdate}
                    className="bg-teal-900 hover:bg-teal-600 transition text-white px-5 rounded-lg"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p className="text-xl text-teal-950 font-medium">
                  {user.email}
                </p>
              )}
            </div>

            <p className="flex flex-col text-sm text-slate-500 mb-2">
              Role:{" "}
              <span className="text-xl text-teal-950 font-medium">
                {user.role}
              </span>
            </p>

            <button
              onClick={handleDeleteAccount}
              className="mt-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-5 py-3 rounded-xl"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
