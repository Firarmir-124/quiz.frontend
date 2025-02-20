import React, {useEffect, useState} from 'react';
import QuestionCard from "./components/QuestionCard.jsx";
import Layout from "../../components/layout/Layout.jsx";

const Questions = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const fetchSubjects = async () => {
            const response = await fetch('/data/questions.json');
            if (response.ok) {
                const data = await response.json();
                setSubjects(data.subjects);
                console.log(data);
            } else {
                console.error("Failed to fetch subjects");
            }
        };
        fetchSubjects();
    }, []);

    return (
        <Layout>
            <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
                    {subjects.length > 0 ? (
                        subjects.map((subject) => (
                            <QuestionCard key={subject.name} subject={subject}/>
                        ))
                    ) : (
                        <p className="text-lg text-center text-gray-500 animate-pulse">Loading subjects...</p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Questions;