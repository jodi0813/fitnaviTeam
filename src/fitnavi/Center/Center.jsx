import "./Center.scss";
import CenterNavbar from "./CenterNavbar.jsx";

function Center() {
    return (
        <>

            <section>
                <header class="title">
                    <div class="titlehead">
                        <div class="head">
                            <h2>找場地</h2>
                            <h3>尋找專屬適合您的運動場地</h3>
                        </div>
                        <nav>
                            <ol class="breadcrumb">
                                <li><a href="#">麵包屑1</a></li>
                                <li><a href="#">麵包屑2</a></li>
                                <li><a href="#">麵包屑3</a></li>
                            </ol>
                        </nav>
                    </div>
                </header>
                <hr />
                <h5 class="return">&lt; 返回列表</h5>{/* <返回列表(待改) */}
                <img src="./images/center.jpg" alt="" class="centerPic" />
                <div class="title2">
                    <img src="./images/centerlogopic.jpg" alt="" class="centerLogoPic" />
                    <h2>TECHNOGym</h2>
                    <h3>(忠孝館)</h3>
                    <div class="hashtag">
                        <a href="#">#重訓器材</a>
                        <a href="#">#私人教練</a>
                        <a href="#">#單次計費</a>
                        <a href="#">#女性專區</a>
                        <a href="#">#補給品販賣機</a>
                        <a href="#">#靠近捷運站</a>
                    </div>
                </div>
                <h3 class="introductionTitle">場館簡介</h3>
                <p class="introduction">場館介紹內容會在這邊顯示，可能有有兩段，不會這邊顯示，可能有有兩段，不會太多，場館介紹內容會在這邊顯示，可能有有兩段，不會太多，場館介紹內容會在這邊顯示，可能有有兩段，不會太多，場館介紹內容會在這邊顯示，可能有有兩段，不會太多。
                    這邊是第二段，內容大概也這樣呈現，這邊是第二段，內容大概也這樣呈現，這邊是第二段，內容大概也這樣呈現，這邊是第二段，內容大概也這樣呈現，這邊是第二段，內容大概也這樣呈現，這邊是第二段，內容大概也這樣呈現。
                </p>
                <div class="expandContent">展開內容</div>
            </section>
            <CenterNavbar />

        </>
    )
}
export default Center