
import Card from 'react-bootstrap/Card';
import './card.css'

function Imagecard() {
  const cardData = [
    {
      image: 'services-1.png',
      title: 'Asana',
      text: 'Yoga poses that improve strength, balance, and flexibility. They prepare your body for meditation.',
    },
    {
      image: 'services-2.png',
      title: 'Meditation',
      text: 'A practice of calming the mind and turning inward.It helps reduce stress and increases inner peace.',
    },
    {
      image: 'services-3.png',
      title: 'Mudra',
      text: 'Hand gestures that guide energy flow. Used in meditation to improve focus and bring balance.',
    },
    {
      image: 'services-4.png',
      title: 'Bandhas',
      text: 'Internal energy locks that support breath control and boost inner strength during yoga practice.',
    },
    {
      image: 'services-5.png',
      title: 'Philosophy',
      text: 'The wisdom behind yoga. It teaches how to live with peace, purpose, and awareness.',
    },
    {
      image: 'services-6.png',
      title: 'Pranayama',
      text: 'Breath control techniques that calm the mind, energize the body, and prepare for meditation.',
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
       <h2 className="my-5 text-center">Balance Every Part of You</h2>

        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title className="text-center">{card.title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>{card.text}</Card.Text>
               
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imagecard;
