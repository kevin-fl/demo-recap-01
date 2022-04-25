import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Link, Outlet, useParams, useNavigate, useSearchParams } from "react-router-dom";
import TitlePage from "../../components/title-page/title-page";


export const RouteInitial = () => (
    <div>
        <Typography component='h3' variant='h6'>
            Contenu initial


        </Typography>

    </div>
);

export const RouteChoiceA = () => (

    <div>
        <Typography component='h3' variant='h6'>
            Choix A -Pierre
        </Typography>
    </div>
);



export const RouteChoiceB = () => (

    <div>
        <Typography component='h3' variant='h6'>
            Choix B -Morgane


        </Typography>

    </div>
);

export const RouteParam = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        if (isNaN(parseInt(id))) {
            navigate('error', { replace: true });
        }
    }, [id]);
    // const params = useParams();
    // params.id

    return (
        <div>
            <Typography component='h3' variant='h6'>
                Le parametre recu est {id}
            </Typography>
        </div>
    );

};




export const RouteNotFound = () => {

    return (
        <div>
            <Typography component='h3' variant='h6'>
                perdu ?
            </Typography>

        </div>

    );
};
export const RouteQuery = () => {
    const [searchParams, setsearchParams] = useSearchParams({ lastname: 'snow' });

    const firstname = searchParams.get('firstname');
    const lastname = searchParams.get('lastname');


    return (
        <div>
            <Typography component='h3' variant='h6'>
                les parametres query sont : {firstname} {lastname}
            </Typography>

        </div>

    );



};

const DemoRouter = () => {

    return (
        <main>

            <TitlePage content='Demo de REACT ROUTER' />
            <ul>
                <li><Link to=''>Initial</Link></li>
                <li><Link to='choiceA'>Choix A</Link></li>
                <li><Link to='ChoiceB'>Choix B</Link></li>
                <li><Link to='/'>home</Link></li>
            </ul>
            <ul>
                <li><Link to='param/42'>Param42</Link></li>
                <li><Link to='param/1337'>Param 1337</Link></li>
                <li><Link to='param/test'>Param test</Link></li>
            </ul>
            <ul>
                <li><Link to='query/?firstname=Zaza&lastname=Vanderquack'>Query: firstname=Zaza &amp; lastname=Vanderquack</Link></li>
                <li><Link to='query/?firstname=Della&lastname=Duck'>Query: firstname=Della &amp; lastname=Duck</Link></li>
                <li><Link to='query/?firstname=Rachid'>Query: firstname=Rachid</Link></li>
            </ul>
            <Outlet />
        </main>

    );
};

export default DemoRouter;