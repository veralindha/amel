import CardActivity from "./card-activity";
import EditActivity from "./edit-activity";

export default function Activity() {
    return (
        <section className="content">
            <div className="container-fluid">
                {/* Timelime example  */}
                <div className="row">
                    <div className="col-md-12">
                        {/* The time line */}
                        <div className="timeline">
                            <CardActivity/>
                        </div>
                    </div>
                    {/* /.col */}
                </div>
                <EditActivity/>
            </div>
            {/* /.timeline */}
        </section>
    )
}