import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchSpaceArticles = async () => {
      try {
        const endPoint = "https://api.spaceflightnewsapi.net/v4/articles";
        const response = await fetch(endPoint);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setArticles(data.results);
        } else {
          throw new Error("Error while fetching Articles");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSpaceArticles();
  }, []);

  return (
    <Container>
      <h1>Space News</h1>
      <Row xs={1} md={2} className="g-4 mt-2 ">
        {articles.map((article) => (
          <Col key={article.id}>
            <Card className="flex-row h-100 shadow">
              <Card.Body className="d-flex flex-column ">
                <Card.Title className="text-start flex-grow-1 ">
                  {article.title}
                </Card.Title>
                <Card.Text className="text-end">
                  <p className="mb-0">
                    date: {article.updated_at.split("T")[0]}
                  </p>
                  <p> at: {article.updated_at.split("T")[1].split(".")[0]}</p>
                </Card.Text>
                <Button variant="primary" className="text-white mt-2 ">
                  <Link to={`/Details/${article.id}`} className="nav-link ">
                    Read More
                  </Link>
                </Button>
              </Card.Body>
              <Card.Img src={article.image_url} style={{ width: "300px" }} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArticlesList;
