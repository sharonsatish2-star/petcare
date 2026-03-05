"use client"
import { useState } from "react"

export default function BookingPage() {
    const [petName, setPetName] = useState("")
    const [service, setService] = useState("")
    const [date, setDate] = useState("")

    const book = async () => {
        await fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ petName, service, date }),
        })

        alert("Booking Confirmed!")
        setPetName("")
        setService("")
        setDate("")
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">📅 Book Service</h1>

            <input className="border p-2 w-full mb-3" placeholder="Pet Name" value={petName} onChange={e => setPetName(e.target.value)} />

            <select className="border p-2 w-full mb-3" onChange={e => setService(e.target.value)}>
                <option>Select Service</option>
                <option>Grooming</option>
                <option>Walking</option>
                <option>Sitting</option>
                <option>Vet</option>
            </select>

            <input type="date" className="border p-2 w-full mb-3" value={date} onChange={e => setDate(e.target.value)} />

            <button onClick={book} className="bg-green-500 text-white px-4 py-2 rounded">
                Confirm Booking
            </button>
        </div>
    )
}