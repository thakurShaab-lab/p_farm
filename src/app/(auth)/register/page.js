"use client"

import { useState } from "react"
import { useAuth } from "@/context/AuthContext"

export default function Register() {
  const { register } = useAuth()

  const [formData, setFormData] = useState({
    farm_name: "",
    contact_person: "",
    email: "",
    mobile_number: "",
    location_id: "",
    address: "",
    password: "",
    confirm_password: "",
    app_id: "web_app",
    device_id: "browser",
    app_type: "web",
    agree: true,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await register(formData)
    alert(res.message)
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl p-8 rounded-xl w-full max-w-lg space-y-3"
      >
        <h2 className="text-2xl font-bold text-green-600 text-center">
          Register
        </h2>

        {Object.keys(formData).map((key) =>
          key !== "agree" ? (
            <input
              key={key}
              type={key.includes("password") ? "password" : "text"}
              placeholder={key.replace("_", " ")}
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
            />
          ) : null
        )}

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  )
}