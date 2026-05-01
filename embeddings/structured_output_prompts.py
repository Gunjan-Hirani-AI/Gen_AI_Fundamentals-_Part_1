from dotenv import load_dotenv
load_dotenv()
from langchain.chat_models import init_chat_model
from rich import print
from pydantic import BaseModel
from typing import List,Optional
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser


class Movie(BaseModel):
    title: str
    release_year : Optional[int]
    genre : List[str]
    director: Optional[str]
    cast: List[str]
    rating: Optional[float]
    summary: str


parser = PydanticOutputParser(pydantic_object=Movie)



prompt = ChatPromptTemplate.from_messages([
    ('system',
     """
    Extract movie information from the paragraph
     {format_instructions}
    """),
    ("human","{paragraph}")
])


model = init_chat_model(
    model='gpt-5-mini'
)

para = input("Give your paragraph : ")


final_prompt = prompt.invoke(
    {"paragraph" : para,
     'format_instructions': parser.get_format_instructions()
     }
)

res = model.invoke(final_prompt)
movie_data = parser.parse(res.content)

print(movie_data)

#try following prompts :

#Gully Boy is a 2019 Indian musical drama film directed by Zoya Akhtar. It stars Ranveer Singh and Alia Bhatt. Set in the slums of Mumbai, the story follows an aspiring street rapper who rises to fame through his talent and determination. The film explores themes of ambition, class struggle, and self-expression. It is praised for its music, performances, and realistic portrayal of underground rap culture, with an IMDb rating of 7.9.

#Baahubali: The Beginning is a 2015 Indian epic action film directed by S. S. Rajamouli. It stars Prabhas, Rana Daggubati, Anushka Shetty, and Tamannaah. Set in the fictional kingdom of Mahishmati, the story follows Shivudu as he discovers his royal heritage and rises to challenge a tyrannical ruler. The film explores themes of power, destiny, and loyalty. It is widely praised for its grand visuals, action sequences, and storytelling, and holds an IMDb rating of 8.0.

#3 Idiots is a 2009 Indian comedy-drama film directed by Rajkumar Hirani. It stars Aamir Khan, R. Madhavan, Sharman Joshi, Kareena Kapoor, and Boman Irani. Set in an engineering college, the film follows three friends navigating academic pressure while challenging the traditional education system. The story highlights themes of friendship, innovation, and following one's passion. The film is known for its humor, emotional depth, and social message, with an IMDb rating of 8.4.

#Dangal is a 2016 Indian biographical sports drama film directed by Nitesh Tiwari. It stars Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra, and Sakshi Tanwar. Set in rural Haryana, the story follows former wrestler Mahavir Singh Phogat as he trains his daughters to become world-class wrestlers despite societal resistance. The film explores themes of gender equality, determination, and perseverance. It received widespread acclaim for its inspiring story and performances, and holds an IMDb rating of 8.4.

#Lagaan is a 2001 Indian historical sports drama film directed by Ashutosh Gowariker. It stars Aamir Khan and Gracy Singh. Set in colonial India, the story follows villagers who challenge British officers to a game of cricket to avoid oppressive taxes. The film explores themes of unity, resistance, and courage. It is widely acclaimed for its storytelling, music, and performances, and was nominated for an Academy Award, with an IMDb rating of 8.1.