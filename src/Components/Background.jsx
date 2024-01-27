import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center'}}>
            <div>
                <Card style={{ maxWidth: "578px", marginBottom: "50px", backgroundColor: "#DEEED6", position: "relative" }} className="text-black">
                    <div style={{ padding: "20px" }}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                        </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control style={{ height: '30px', width: '300px', fontSize:'14px' }} size="lg" type="text" placeholder="Enter your address" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            <div style={{ overflow: "hidden" }}>
                <img
                    style={{
                        alignItems: 'Center',
                        width: "100%",
                        position: "relative",
                        bottom: "143px",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                    src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
                    alt="Grocery Delivery Background"
                />
            </div>
        </div>
    );
}