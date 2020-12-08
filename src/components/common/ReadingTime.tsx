const ReadingTime = ({text}) => {

    const wpm = 200;
    const time = Math.ceil(text.split(" ").length/wpm);

    return <div className="text-xs text-gray-500 font-bold uppercase my-3 tracking-tight">
        Tempo di lettura stimato: {time} minuti
    </div>

}

export default ReadingTime;