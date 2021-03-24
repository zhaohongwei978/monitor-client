import React from 'react';
import ReactDOM from 'react-dom'
import App from './pages/App'
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import { Route,Switch,HashRouter } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
ReactDOM.render(
    <HashRouter>
        <ConfigProvider locale={zhCN}>
            <Route path="/" component={App} />
		</ConfigProvider>
    </HashRouter>,
    document.getElementById('app')
)