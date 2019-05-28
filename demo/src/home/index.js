import React from 'react';
import './style.scss';

class MobileMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuState:false,
      menu:[
        {id:'F001',text:'菜单1',url:'/'},
        {id:'F002',text:'菜单2',url:'/'}
      ]
    }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.creatAslide = this.creatAslide.bind(this);
    this.removeAslide = this.removeAslide.bind(this);
  }
  toggleMobileMenu(event){
    event.stopPropagation();
    if(!this.state.menuState){
      document.getElementById('root').className = 'show-mobile-menu';
      document.getElementById('aslide').className = 'show';
    }else{
      document.getElementById('root').className = '';
      document.getElementById('aslide').className = 'hide';
    }
    this.setState({menuState:!this.state.menuState});
    
  }
  //初始化 第一次渲染后调用
  componentDidMount(){
    // 创建菜单
    this.creatAslide();
  }
  creatAslide(){
    let aslide = document.createElement('div');
    aslide.setAttribute('id','aslide');
    aslide.className = 'hide';
    document.body.append(aslide);
  }
  removeAslide(){
    var aslide = document.getElementById('aslide');
    aslide.remove();
    document.getElementById('root').className = '';
  }
  render(){
    return (
      <div className="mobile-menu">
        <button className={this.state.menuState ? 'active menu-btn' : 'menu-btn'} onClick={this.toggleMobileMenu}>
          <i className="top"></i>
          <i className="mid1"></i>
          <i className="mid2"></i>
          <i className="bot"></i>
        </button>
      </div>

     


    )
  }
}


function Index() {
  return (
    <div className="home_page">
      <header className="header">
        <MobileMenu></MobileMenu>
      </header>
    </div>
  );
}

export default Index;
