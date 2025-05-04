function Joinus() {
    return (
        <>
            <section className="Joinus-header">
                <div className='headertitle'>
                    <h3>加入我們</h3>
                    <h4>成為我們的合作夥伴</h4>
                </div>

                <hr className='headerline' />
            </section>

            <section className="Joinus-form">
                <div className="imcoach">
                    <form action="">我是教練
                        <label htmlFor="">您可以</label>
                        <p>獲得學員媒合機會，上架一對一課程</p>
                        <p>與營養師跨領域合作，打造完整健身計畫</p>
                        <p>擴展個人品牌曝光</p>
                        <p> 建立專業信任感</p>

                        <label htmlFor="">您可以</label>
                        <p>定期更新可預約時段，追蹤學員運動進度</p>
                        <p> 撰寫實用訓練文章或影片</p>
                    </form>

                    <button>成為合作教練</button>
                </div>

                <div className="imnutrionist">
                    <form action="">我是營養師
                        <label htmlFor="">您可以</label>
                        <p>觸及有飲食諮詢需求的族群，擴大客群</p>
                        <p>與教練跨領域合作，整合飲食與運動建議</p>
                        <p> 擴展個人品牌曝光</p>
                        <p> 建立專業信任感</p>

                        <label htmlFor="">您可以</label>
                        <p>定期追蹤合作學員並給予建議或營養提醒</p>
                        <p> 撰寫飲食知識文章或影片</p>
                    </form>

                    <button>成為合作營養師</button>
                </div>
            </section>

        </>
    )
}
export default Joinus