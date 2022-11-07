import { Component } from 'react';
import NavbarContext from '../../NavbarContext/navbarContext';
import Content from '../Content/content';
import Left from '../LeftNavbar/left';
import Right from '../RightNavbar/right';
class AllContent extends Component {
    render() {
        return (
            <NavbarContext.Consumer>
                {value => {
                    const { isContentActive, isLeftActive, isRightActive} = value
                    return (
                        <div className='all-content'>
                            <div className='header'>
                                <h1 className='heading'>Header</h1>
                            </div>
                            <div className='nav-content'>
                                <div className={isLeftActive? '':'left-none'}>
                                <Left  />
                                </div>
                                <div className={isContentActive? '':'content-none'}>
                                <Content />
                                </div>
                                <div className={isRightActive? '':'right-none'}>
                                <Right />
                                </div>
                            </div>
                            <div className='footer'>
                                <h1 className='heading'>Footer</h1>
                            </div>
                        </div>
                    )
                }}
            </NavbarContext.Consumer>

        )
    }
}

export default AllContent;
