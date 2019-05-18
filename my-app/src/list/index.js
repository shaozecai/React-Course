import React from 'react'

/**
 * React 数组的遍历输出
 */
class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news:[
                {id:'001',title:'new 1'},
                {id:'002',title:'new 2'},
                {id:'003',title:'new 3'},
                {id:'004',title:'new 4'},
                {id:'005',title:'new 5'}
            ]
        }
    }
    render(){
        const news = this.state.news;
        return (
            <div>
                {
                    news.map((news,index) =>
                        <li key={news.id}>{news.title}</li>
                    )
                }
            </div>
        )
    }
}
export default List;
