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
        </>
    );
}
export default CenterNavbar;
