import { FaCheckCircle, FaClock, FaPercentage, FaQuestionCircle, FaStopwatch, FaTimesCircle } from "react-icons/fa";

const Results = ({
                     totalQuestions,
                     correctAnswers,
                     wrongAnswers,
                     unattemptedQuestions,
                     percentage,
                     timeSpent,
                     averageTimePerQuestion,
                 }) => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Результаты
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
                {/* Correct Answers */}
                <div className="p-5 bg-white shadow-md rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div>
                        <p className="text-xl font-semibold">Правильные ответы</p>
                        <p className="text-lg font-bold text-green-600">{correctAnswers}</p>
                    </div>
                    <FaCheckCircle className="text-green-500 text-3xl" />
                </div>

                {/* Wrong Answers */}
                <div className="p-5 bg-white shadow-md rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div>
                        <p className="text-xl font-semibold">Неправильные ответы</p>
                        <p className="text-lg font-bold text-red-600">{wrongAnswers}</p>
                    </div>
                    <FaTimesCircle className="text-red-500 text-3xl" />
                </div>

                {/* Unattempted Questions */}
                <div className="p-5 bg-white shadow-md rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div>
                        <p className="text-xl font-semibold">Пропущенные ответы</p>
                        <p className="text-lg font-bold text-yellow-600">{unattemptedQuestions}</p>
                    </div>
                    <FaQuestionCircle className="text-yellow-500 text-3xl" />
                </div>

                {/* Percentage */}
                <div className="p-5 bg-white shadow-md rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow duration-300">
                    <div>
                        <p className="text-xl font-semibold">Процент</p>
                        <p className="text-lg font-bold text-blue-600">{percentage}%</p>
                    </div>
                    <FaPercentage className="text-blue-500 text-3xl" />
                </div>

                {/* Total Time Spent */}
                <div className="p-5 bg-white shadow-md rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow duration-300">
                    <div>
                        <p className="text-xl font-semibold">Общее время</p>
                        <p className="text-lg font-bold text-purple-600">{timeSpent.toFixed(2)}s</p>
                    </div>
                    <FaClock className="text-purple-500 text-3xl" />
                </div>

                {/* Avg Time Per Question */}
                <div className="p-5 bg-white shadow-md rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow duration-300">
                    <div>
                        <p className="text-xl font-semibold">Среднее время</p>
                        <p className="text-lg font-bold text-indigo-600">{averageTimePerQuestion}s</p>
                    </div>
                    <FaStopwatch className="text-indigo-500 text-3xl" />
                </div>

                {/* Final Score */}
                <div className="p-5 bg-white shadow-md rounded-lg flex items-center justify-between col-span-1 md:col-span-3 text-center hover:shadow-lg transition-shadow duration-300">
                    <p className="text-xl font-semibold w-full">
                        Вы набрали {correctAnswers * 4} из {totalQuestions * 4} баллов!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Results;