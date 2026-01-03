import { useState } from 'react';
import { motion } from 'framer-motion';

const PersonalInputModal = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        interest: '',
        focus: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-panel w-full max-w-md p-8 rounded-xl border border-accent/50 box-shadow-glow"
            >
                <h2 className="text-xl font-orbitron text-accent mb-6 border-b border-accent/30 pb-2">
                    IDENTITY_VERIFICATION
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">SUBJECT_NAME</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-black/50 border border-gray-700 rounded p-2 text-white focus:border-accent focus:outline-none transition-colors"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-400 mb-1">CHRONOLOGICAL_AGE</label>
                        <input
                            type="number"
                            className="w-full bg-black/50 border border-gray-700 rounded p-2 text-white focus:border-accent focus:outline-none transition-colors"
                            value={formData.age}
                            onChange={e => setFormData({ ...formData, age: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-400 mb-1">PRIMARY_INTEREST</label>
                        <select
                            className="w-full bg-black/50 border border-gray-700 rounded p-2 text-white focus:border-accent focus:outline-none transition-colors"
                            value={formData.interest}
                            onChange={e => setFormData({ ...formData, interest: e.target.value })}
                        >
                            <option value="">Select Sector...</option>
                            <option value="Technology">Technology</option>
                            <option value="Art">Art & Culture</option>
                            <option value="Science">Science & Bio</option>
                            <option value="Finance">Economics</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs text-gray-400 mb-1">CURRENT_FOCUS</label>
                        <input
                            type="text"
                            placeholder="e.g. Learning AI, Building a House..."
                            className="w-full bg-black/50 border border-gray-700 rounded p-2 text-white focus:border-accent focus:outline-none transition-colors"
                            value={formData.focus}
                            onChange={e => setFormData({ ...formData, focus: e.target.value })}
                        />
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 border border-gray-600 text-gray-400 hover:bg-white/5 transition-colors font-mono text-sm"
                        >
                            CANCEL
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-3 bg-accent text-black font-bold hover:bg-white transition-colors font-mono text-sm"
                        >
                            PROCESS_DATA
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default PersonalInputModal;
