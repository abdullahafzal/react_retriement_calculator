import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import Signup from 'components/Signup'
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

export default class HomePage extends React.Component {
  state = {
    
  };
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  handleAuthState = authState => {
    this.setState({
      authState,
    });
  };

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="HomePage"
        title="AFS Home"
      >
        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                <NumberWidget
                  title="Total Profit"
                  subtitle="This month"
                  number="9.8k"
                  color="primary"
                  progress={{
                    value: 75,
                    label: 'Last month',
                  }}
                />
              </Col>

              <Col lg={6} md={6} sm={6} xs={12}>
                <NumberWidget
                  title="Revenue"
                  subtitle="This month"
                  number="5,400"
                  color="primary"
                  progress={{
                    value: 45,
                    label: 'Last month',
                  }}
                />
              </Col>
              </Row>
              <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                <NumberWidget
                  title="Sales"
                  subtitle="This month"
                  number="3,400"
                  color="primary"
                  progress={{
                    value: 90,
                    label: 'Last month',
                  }}
                />
              </Col>

              <Col lg={6} md={6} sm={6} xs={12}>
                <NumberWidget
                  title="Profit Rate"
                  subtitle="This month"
                  number="38%"
                  color="primary"
                  progress={{
                    value: 60,
                    label: 'Last month',
                  }}
                />
              </Col>
            </Row>

            <Row>

              <Col lg="12" md="12" sm="12" xs="12">
                <Card>
                  <CardHeader>Total Expense</CardHeader>
                  <CardBody>
                    <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
                  </CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                      <MdInsertChart size={25} color={primaryColor} /> Cost of sales{' '}
                      <Badge color="secondary">$3000</Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                      <MdBubbleChart size={25} color={primaryColor} /> Management
                      costs <Badge color="secondary">$1200</Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                      <MdShowChart size={25} color={primaryColor} /> Financial costs{' '}
                      <Badge color="secondary">$800</Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                      <MdPieChart size={25} color={primaryColor} /> Other operating
                      costs <Badge color="secondary">$2400</Badge>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <Card style={{padding: '10%'}}>
              <Signup/>
            </Card>
          </Col>
        </Row>
       

       
      </Page>
    );
  }
}
