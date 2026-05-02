const NewsSection = () => {
    return (
        <div className="padding-container my-10 md:my-16">
            <div className="border-t">
                <h4 className="text-2xl mt-6">News</h4>
                <div className="flex flex-col gap-6 mt-6">
                    <div className="flex items-start justify-start gap-20 py-4">
                            <h4 className="">Mar 2026</h4>
                            <p>Paper (<b>Adapting Foundational ASR Models to Efik</b>) accepted to <b>Speakable @ LREC 2026</b> - Spain.</p>
                    </div>
                    <div className="flex items-start justify-start gap-20 py-4">
                            <h4 className="">Feb 2026</h4>
                            <p>Awarded <b>full sponsorship</b> to attend the <b>AfricaNLP Workshop @ EACL 2026</b>, Rabat, Morocco.</p>
                    </div>
                    <div className="flex items-start justify-start gap-20 py-4">
                            <h4 className="">Feb 2026</h4>
                            <p>Joined <b>PlotWeaver</b> as a <b>Machine Learning Research Engineer.</b></p>
                    </div>
                    <div className="flex items-start justify-start gap-20 py-4">
                            <h4 className="">Jan 2026</h4>
                            <p>Gave a talk @ <b>Kabod Group</b> on Funding opportunities for African Language Industry Projects.</p>
                    </div>
                    <div className="flex items-start justify-start gap-20 py-4">
                            <h4 className="">Jan 2026</h4>
                            <p>First paper accepted to <b>AfricaNLP @ EACL 2026</b> - Morocco.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSection;