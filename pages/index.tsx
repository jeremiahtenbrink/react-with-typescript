import { Header, defaultTitle } from "../components/Header";
import { Clock } from "../components/Clock";
import * as utils from '../lib/utils';
import Schedule from '../components/Schedule'

export default () => (
    <div>
        <Header title={ defaultTitle }/>
        <Clock time={ utils.getTime() }/>
        <Schedule schedule={ utils.getSchedule() }/>
    </div>
)