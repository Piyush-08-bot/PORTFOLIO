import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const TIME_SLOTS = [
    "7:00 PM - 8:00 PM",
    "9:00 PM - 10:00 PM",
    "10:00 PM - 11:00 PM"
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ScheduleCallModal = ({ isOpen, onClose }) => {
    
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    
    const [currentDate, setCurrentDate] = useState(new Date());

    
    useEffect(() => {
        if (isOpen) {
            setSelectedDate(null);
            setSelectedTime('');
            setCurrentDate(new Date());
        }
    }, [isOpen]);

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay(); 
        return { daysInMonth, firstDayOfMonth };
    };

    const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentDate);

    const handleDateClick = (day) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (newDate >= today) {
            setSelectedDate(newDate);
        }
    };

    const changeMonth = (increment) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1);
        setCurrentDate(newDate);
    };

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    const handleSchedule = () => {
        if (!selectedDate || !selectedTime) return;

        const subject = "Meeting Confirmation: Project Discussion";
        const body = `Hi Piyush,

I would like to schedule a meeting with you.

Date: ${formatDate(selectedDate)}
Time Slot: ${selectedTime}

Looking forward to connecting with you.

Best regards,`;

        const mailtoLink = `mailto:piyush.raj24012006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
            >
                <div className="min-h-full flex items-center justify-center w-full py-8">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-background border border-white/10 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]" 
                    >

                        {}
                        <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 overflow-y-auto bg-white/[0.02]">
                            <h3 className="text-secondary font-mono text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                                <CalendarIcon size={14} className="text-white" />
                                Select a Date
                            </h3>

                            {}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white">
                                    {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                                </h2>
                                <div className="flex gap-2">
                                    <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-white/10 transition-colors text-white">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-white/10 transition-colors text-white">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            {}
                            <div className="grid grid-cols-7 mb-2">
                                {DAYS.map(day => (
                                    <div key={day} className="text-center text-[10px] font-mono font-semibold text-secondary uppercase py-2">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {}
                                {[...Array(firstDayOfMonth)].map((_, i) => (
                                    <div key={`empty-${i}`} />
                                ))}

                                {}
                                {[...Array(daysInMonth)].map((_, i) => {
                                    const day = i + 1;
                                    const currentDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    const isPast = currentDayDate < today;
                                    const isSelected = selectedDate &&
                                        currentDayDate.getDate() === selectedDate.getDate() &&
                                        currentDayDate.getMonth() === selectedDate.getMonth() &&
                                        currentDayDate.getFullYear() === selectedDate.getFullYear();

                                    return (
                                        <button
                                            key={day}
                                            disabled={isPast}
                                            onClick={() => handleSchedule && handleDateClick(day)}
                                            className={`
                                                aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all relative
                                                ${isSelected
                                                    ? 'bg-white text-black shadow-lg font-bold scale-105'
                                                    : isPast
                                                        ? 'text-gray-600 cursor-not-allowed'
                                                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                                }
                                            `}
                                        >
                                            {day}
                                            {isSelected && <motion.div layoutId="selectedDay" className="absolute inset-0 border-2 border-black/20 rounded-lg" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {}
                        <div className="w-full md:w-[350px] bg-background p-6 md:p-8 flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-secondary font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                                    <Clock size={14} className="text-white" />
                                    Select Time
                                </h3>
                                <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition-colors">
                                    <X className="text-gray-400" size={20} />
                                </button>
                            </div>

                            <div className="space-y-3 flex-1">
                                {TIME_SLOTS.map((slot) => (
                                    <button
                                        key={slot}
                                        onClick={() => setSelectedTime(slot)}
                                        className={`w-full p-4 rounded-xl border text-xs font-mono transition-all flex items-center justify-between group ${selectedTime === slot
                                            ? 'bg-white text-black border-white shadow-lg'
                                            : 'bg-white/5 border-white/5 text-secondary hover:border-white/20 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        <span>{slot}</span>
                                        {selectedTime === slot && <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="mb-6 space-y-1">
                                    <p className="text-[10px] text-secondary font-mono uppercase tracking-wider">Scheduled for</p>
                                    <p className="text-white font-medium text-sm">
                                        {selectedDate ? formatDate(selectedDate) : 'Select a date...'}
                                    </p>
                                    <p className="text-secondary font-mono text-xs">
                                        {selectedTime || 'Select a time...'}
                                    </p>
                                </div>

                                <button
                                    onClick={handleSchedule}
                                    disabled={!selectedDate || !selectedTime}
                                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${selectedDate && selectedTime
                                        ? 'bg-white text-black hover:bg-gray-200 shadow-xl'
                                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                        }`}
                                >
                                    <Mail size={18} />
                                    Confirm Request
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ScheduleCallModal;
