
import Image from "next/image"
import "./empty.scss"
const Empty = () => {
    return (
        <div className="empty">
            <div className="box">
                <div className="list">
                    <div className="top">
                        <Image alt="" width={100} height={100} src={"/images/illustration-empty.svg"}/> 
                    </div>
                    <div className="bottom">
                        <span>Result Shown Here</span>
                        <span>Complete the form and click "calculator repaymnet" to see </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Empty