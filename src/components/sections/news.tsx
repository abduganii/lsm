import Container from "@/components/ui/container";
import NewsCard from "../card/news";


export default function NewsSections() {
    return (
            <Container  className='my-[120px]' >
                <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Новости</h3>
                <div className="flex items-center gap-6 mt-8 ">
                    <NewsCard title='В Управлении юстиции города Ташкента состоялся выездной прием по изучению...' date='16.12.12'/>
                    <NewsCard title='В Управлении юстиции города Ташкента состоялся выездной прием по изучению...' date='16.12.12'/>
                    <NewsCard title='В Управлении юстиции города Ташкента состоялся выездной прием по изучению...' date='16.12.12'/>
                </div>
            </Container>  
        );
  }
  