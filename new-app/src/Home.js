import React, { useState } from "react";
import {Button, Table, Modal, Input} from "antd";
import './Home.css';
import {EditOutlined, DeleteOutlined} from "@ant-design/icons"

function Home(){
    const [isEditing, setIsEditing] = useState(false)
    const [editingTopic, setEditingTopic] = useState(null)
    const [dataSorce, setDataSource] = useState([
        {
            id: 1,
            title: "Marketing Problems",
            time: "1 Hour",
            description: "We are going to discuss problems of the marketing department"
        },
        {
            id: 2,
            title: "Advertisement Problems",
            time: "1 Hour",
            description: "We are going to discuss problems of the advertisement department"
        },

    ])
    const columns =[
        {
            key:'1',
            title:'id',
            dataIndex:'id'
        },
        {
            key:'2',
            title:'title',
            dataIndex:'title'
        },
        {
            key:'3',
            title:'time',
            dataIndex:'time'
        },
        {
            key:'4',
            title:'description',
            dataIndex:'description'
        },
        {
            key:'5',
            title:'actions',
            render:(record)=>{
                return <>
                    <EditOutlined onClick={()=>{
                        onEditTopic(record);
                    }}/>
                    <DeleteOutlined onClick={()=>{
                        onDeleteTopic(record);
                    }} />
                </>
            }
        }
    ]

    const onAddTopic=()=>{
        const newTopic = {
            id:999,
            title:"None",
            time:"None",
            description:"None",
        }
        
        setDataSource(pre=>{
            return [...pre, newTopic]
        })
    }

    const onDeleteTopic=(record)=>{
        setDataSource((pre) => {
            return pre.filter((topic) => topic.id != record.id)
        })
    }

    const onEditTopic=(record)=>{
        setIsEditing(true)
        setEditingTopic({...record})
    }

    const resetEditing=()=>{
        setIsEditing(false);
        setEditingTopic(null);
    }

    return(
        <div className="App">
            <header className="App-header">
                <Button onClick={onAddTopic}>Add a new topic</Button>
                <Table columns={columns} dataSource={dataSorce}></Table>
                <Modal
                title="Edit Topic"
                visible={isEditing}
                onCancel={()=>{
                    resetEditing()
                }}
                onOk={()=>{
                    setDataSource(pre=>{
                        return pre.map (topic=>{
                            if (topic.id === editingTopic.id){
                                return editingTopic
                            } else {
                                return topic
                            }
                        })
                    })
                    resetEditing()
                }
                }
                >
                    <Input value={editingTopic?.title} onChange={(e)=>{
                        setEditingTopic(pre=>{
                            return {...pre, title:e.target.value}
                        })
                    }}/>
                    <Input value={editingTopic?.time} onChange={(e)=>{
                        setEditingTopic(pre=>{
                            return {...pre, time:e.target.value}
                        })
                    }}/>
                    <Input value={editingTopic?.description} onChange={(e)=>{
                        setEditingTopic(pre=>{
                            return {...pre, description:e.target.value}
                        })
                    }}/>
                </Modal>
            </header>
        </div>
    );
}

export default Home;