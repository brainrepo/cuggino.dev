const ReadingTime = ({text}) => {

    const wpm = 200;
    const time = Math.ceil(text.split(" ").length/wpm);

    return <div>
        Tempo di lettura stimato: {time} minuti
    </div>

}

export default ReadingTime;