"use client";

import { useState } from "react";
import { X, User, Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const services = [
  {
    id: "spa",
    name: "SPA",
    duration: "1 Hour",
    price: "$80.00",
  },
  {
    id: "hair-braiding",
    name: "HAIR BRAIDING",
    duration: "3–6 Hours",
    price: "From $120.00",
  },
  {
    id: "hair-coloring",
    name: "HAIR COLORING",
    duration: "2–3 Hours",
    price: "From $100.00",
  },
  {
    id: "wigs",
    name: "WIG INSTALLATION",
    duration: "2 Hours",
    price: "From $90.00",
  },
  {
    id: "hair-care",
    name: "HAIR CARE & TREATMENT",
    duration: "1 Hour",
    price: "$60.00",
  },
  {
    id: "hair-extensions",
    name: "HAIR EXTENSIONS",
    duration: "3–5 Hours",
    price: "From $180.00",
  },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);

  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedTime, setSelectedTime] = useState("");
  const [customTime, setCustomTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const finalTime = customTime || selectedTime;
  const selectedServiceData = services.find((service) => service.id === selectedService);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      console.log({
        service: selectedServiceData?.name,
        duration: selectedServiceData?.duration,
        price: selectedServiceData?.price,
        date: selectedDate,
        time: finalTime,
        ...formData,
      });

      // TODO: Send data to your backend/API here

      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setStep(1);
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setCustomTime("");
    setIsSubmitting(false);
    setIsSuccess(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  const close = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/60" onClick={close} />

      {/* MODAL */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F6F1E7] rounded-3xl shadow-2xl">
        {/* CLOSE */}
        <button onClick={close} className="absolute top-4 right-4 p-2">
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-serif">Book Appointment</h2>

          {/* STEP INDICATOR (FIXED ALIGNMENT) */}
          {!isSuccess && (
            <div className="flex gap-3 mt-6 ml-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= s ? "bg-orange-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && <div className="w-10 h-0.5 bg-gray-300 mx-1" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BODY */}
        <div className="p-8">
          {/* SUCCESS */}
          {isSuccess ? (
            <div className="text-center">
              <h3 className="text-xl mb-4">Booking Confirmed</h3>
              <Button onClick={close}>Done</Button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-lg">Select a Service</h3>

                  <div className="space-y-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`w-full rounded-xl border p-4 text-left transition ${
                          selectedService === service.id
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:border-orange-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{service.name}</span>

                          <span className="font-medium text-orange-600">{service.price}</span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Duration: {service.duration}</p>
                      </button>
                    ))}
                  </div>

                  {selectedServiceData && (
                    <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                      <h4 className="font-semibold">{selectedServiceData.name}</h4>

                      <p>
                        <strong>Duration:</strong> {selectedServiceData.duration}
                      </p>

                      <p>
                        <strong>Price:</strong> {selectedServiceData.price}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-spa-brown">Date</h3>
                    <Input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-spa-brown">Pick a Time</h3>

                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setSelectedTime(t);
                            setCustomTime("");
                          }}
                          className={`p-2 border rounded ${
                            selectedTime === t ? "border-orange-500 bg-orange-50" : ""
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* CUSTOM TIME */}
                    <div className="mt-4">
                      <h3 className="font-serif text-xl text-spa-brown">
                        Choose Your Preferred Time
                      </h3>
                      <Input
                        className={`${
                          customTime ? "border-orange-500 ring-1 ring-orange-500" : ""
                        }`}
                        type="time"
                        value={customTime}
                        onChange={(e) => {
                          setCustomTime(e.target.value);
                          setSelectedTime("");
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div>
                  <h3 className="font-serif text-xl text-spa-brown mb-4">Your Details</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-spa-brown flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" /> Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-spa-brown flex items-center gap-2 mb-2"
                      >
                        <Mail className="w-4 h-4" /> Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-spa-brown flex items-center gap-2 mb-2"
                      >
                        <Phone className="w-4 h-4" /> Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes" className="text-spa-brown mb-2 block">
                        Special Requests (Optional)
                      </Label>
                      <textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Any special requests or notes..."
                        rows={3}
                        className="w-full border border-spa-beige rounded-xl p-3 focus:border-spa-orange focus:ring-1 focus:ring-spa-orange outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* NAVIGATION */}
              <div className="flex justify-between mt-8">
                {step > 1 && <Button onClick={() => setStep(step - 1)}>Back</Button>}

                {step < 3 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    disabled={
                      (step === 1 && !selectedService) ||
                      (step === 2 && (!selectedDate || (!selectedTime && !customTime)))
                    }
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.phone || isSubmitting}
                  >
                    {isSubmitting ? "Booking..." : "Confirm"}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
