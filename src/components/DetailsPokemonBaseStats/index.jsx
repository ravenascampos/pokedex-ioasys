import {
  Container,
  TableTitle,
  TableStats,
  TableResults,
} from "./DetailsPokemonBaseStats.styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Colors } from "../../styles/TypesTheme";
import ProgressBar from "@ramonak/react-progress-bar";

export const DetailsPokemonBaseStats = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [details, setDetails] = useState({
    hp: 0,
    atk: 0,
    def: 0,
    satk: 0,
    sdef: 0,
    spd: 0,
  });
  useEffect(() => {
    async function loadPokemonsDetails() {
      const { data } = await api.get(`/pokemon/${id}`);
      setPokemonDetails(data);
      let details = {
        hp: data.stats[0].base_stat,
        atk: data.stats[1].base_stat,
        def: data.stats[2].base_stat,
        satk: data.stats[3].base_stat,
        sdef: data.stats[4].base_stat,
        spd: data.stats[5].base_stat,
      };
      setDetails(details);
    }
    loadPokemonsDetails();
  }, [id]);

  const type = [pokemonDetails.types?.map((type) => type.type.name)[0]];

  return (
    <Container>
      <thead>
        <TableTitle style={{ color: Colors[type] }}>Base Stats</TableTitle>
      </thead>
      <tbody>
        <tr>
          <TableStats style={{ color: Colors[type] }}>HP</TableStats>
          <TableResults>{details.hp}</TableResults>
          <td>
            <ProgressBar
              completed={details.hp}
              bgColor={Colors[type]}
              isLabelVisible={false}
              height={"6px"}
              width={"300px"}
            />
          </td>
        </tr>
        <tr>
          <TableStats style={{ color: Colors[type] }}>ATK</TableStats>
          <TableResults>{details.atk}</TableResults>
          <td>
            <ProgressBar
              completed={details.atk}
              bgColor={Colors[type]}
              isLabelVisible={false}
              height={"6px"}
              width={"300px"}
            />
          </td>
        </tr>
        <tr>
          <TableStats style={{ color: Colors[type] }}>DEF</TableStats>
          <TableResults>{details.def}</TableResults>
          <td>
            <ProgressBar
              completed={details.def}
              bgColor={Colors[type]}
              isLabelVisible={false}
              height={"6px"}
              width={"300px"}
            />
          </td>
        </tr>
        <tr>
          <TableStats style={{ color: Colors[type] }}>SATK</TableStats>
          <TableResults>{details.satk}</TableResults>
          <td>
            <ProgressBar
              completed={details.satk}
              bgColor={Colors[type]}
              isLabelVisible={false}
              height={"6px"}
              width={"300px"}
            />
          </td>
        </tr>
        <tr>
          <TableStats style={{ color: Colors[type] }}>SDEF</TableStats>
          <TableResults>{details.sdef}</TableResults>
          <td>
            <ProgressBar
              completed={details.sdef}
              bgColor={Colors[type]}
              isLabelVisible={false}
              height={"6px"}
              width={"300px"}
            />
          </td>
        </tr>
        <tr>
          <TableStats style={{ color: Colors[type] }}>SPD</TableStats>
          <TableResults>{details.spd}</TableResults>
          <td>
            <ProgressBar
              completed={details.spd}
              bgColor={Colors[type]}
              isLabelVisible={false}
              height={"6px"}
              width={"300px"}
            />
          </td>
        </tr>
      </tbody>
    </Container>
  );
};
