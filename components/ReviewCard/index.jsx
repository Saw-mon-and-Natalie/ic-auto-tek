const ReviewCard = ({ children, author, carType }) => {
    return (
        <div className=" bg-white p-8 xs:p-16 rounded-lg">
            <p className="mb-8 text-indigo-700">{children}</p>
            <div className="text-indigo-700 font-bold">{author}</div>
            <div className="text-xs text-indigo-300 font-medium">{carType}</div>
        </div>
    )
}

export default ReviewCard