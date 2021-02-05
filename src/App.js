import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'
import { useState } from 'react';
import Countdown from "react-countdown";
import { Container, Grid, Segment } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Completionist = () => <span>
  <img src="https://ph-files.imgix.net/d224001c-e5b7-4e51-95f6-8d692887d14b?auto=format&auto=compress&codec=mozjpeg&cs=strip" alt="Party Parrots - Bring the joy of Party Parrots to to iMessage | Product Hunt" 
  style={{"width":"800px", "height": "600px"}} width="1250" height="1250" />
  </span>;
const leaveEY = new Date('2021-03-12 17:30:00 GMT+8');
const leaveSG = new Date('2021-03-15 17:30:00 GMT+8');
const seeWife = new Date('2021-03-22 17:30:00 GMT+8');

const render = (props) => {
  if (props.completed) {
    return <Completionist></Completionist>
  }
  return (<Container>
    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column>
          <Segment style={{"lineHeight": "32px"}}><div className="number">{(props.days < 10 ? "0" : "") + props.days}</div> <div className="words">Days</div>  </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment style={{"lineHeight": "32px"}}><div className="number">{(props.hours < 10 ? "0" : "") + props.hours}</div> <div className="words">Hours</div>  </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment style={{"lineHeight": "32px"}}><div className="number">{(props.minutes < 10 ? "0" : "") + props.minutes}</div> <div className="words">Minutes</div>  </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment style={{"lineHeight": "32px"}}><div className="number">{(props.seconds < 10 ? "0" : "") + props.seconds}</div>  <div className="words">Seconds</div>  </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>);
}

function App() {
  const path = window.location.pathname;
  let value = "leaveEY";
  if (path === "/leaveSG") {
    value = "leaveSG";
  } 
  else if (path === "/meetWife") {
    value = "meetWife";
  }
  const [activeItem, setActiveItem] = useState(value);
  console.log(activeItem);
  return (
    <div className="App">
      <Router>
        <Menu pointing>
          <Link to="/">
            <Menu.Item
              name='leaveEY'
              active={activeItem === 'leaveEY'}
              onClick={(e, { name }) => setActiveItem(name)}
            />
          </Link>
          <Link to="/leaveSG">
            <Menu.Item
              name='leaveSG'
              active={activeItem === 'leaveSG'}
              onClick={(e, { name }) => setActiveItem(name)}
            />
          </Link>
          <Link to="/meetWife">
            <Menu.Item
              name='meetWife'
              active={activeItem === 'meetWife'}
              onClick={(e, { name }) => setActiveItem(name)}
            />
          </Link>
        </Menu>
        <Switch>
          <Route path="/leaveSG">
            <Countdown key="01" date={leaveSG} renderer={props =>
              <div>
                {render(props)}
              </div>}
            >
            </Countdown>
          </Route>
          <Route path="/meetWife">
            <Countdown key="02" date={seeWife} renderer={props =>
              <div>
                {render(props)}
              </div>}>
            </Countdown>
          </Route>
          <Route path="/">
            <Countdown key="03" date={leaveEY} renderer={props =>
              <div>
                {render(props)}
              </div>}>
            </Countdown>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
