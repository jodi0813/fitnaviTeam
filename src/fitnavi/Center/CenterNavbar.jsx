import { Link } from "react-router-dom";
import "./CenterNavbar.scss";
function CenterNavbar() {
    return (
        <>
            <div class="centerMenu">
                <ul >
                    <li>
                        <Link to="">場館資料</Link>
                    </li>
                    <li>
                        <Link to="">環境設施</Link>
                    </li>
                    <li>
                        <Link to="">私人教練</Link>
                    </li>
                </ul>
            </div>
            <div>
                基本資料
            </div>
            <ul>
                <li>地址</li>
                <li>營業時間</li>
                <li>有無停車場</li>
                <li>大眾運輸</li>
            </ul>
        </>
    );
}
export default CenterNavbar;
