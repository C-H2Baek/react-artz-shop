import axios from "axios";
import { react, useEffect, useState } from "react";
import { React } from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../Layout/Footer";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


const Writer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            url: "/board/show",
            method: "GET",
            baseURL: "http://localhost:8088",
        }).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }, [])

    function addPadding(num) {
        return num < 10 ? `0${num}` : num
    }

    function getdate(date) {
        const d = new Date(date)
        console.log(d.getFullYear(), d.getMonth() + 1, d.getDate())
        console.log(d.getHours(), d.getMinutes(), d.getSeconds())

        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${addPadding(d.getHours())}:${addPadding(d.getMinutes())}:${addPadding(d.getSeconds())}`

    }
    return (
        
        <Container style={{
            marginTop: '200px',
            textAlign: 'center',
            maxWidth: '600px'
        }}>
            <h5>Writer</h5>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
                <FormControl
                    placeholder="Title"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>내용</InputGroup.Text>
                <FormControl placeholder="Content" as="textarea" rows={12} aria-label="With textarea" />
            </InputGroup>
            <div className="Btn-right">
                <Button href="/Module/Notice" variant="dark" >글작성</Button>
            </div>
                       
            <Footer />
            </Container>
        
    );
};
export default Writer;