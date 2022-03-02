import {
  Container,
  TableTitle,
  TableStats,
  TableResults,
} from "./DetailsPokemonBaseStats.styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsPokemonBaseStats = () => {
  const { id } = useParams();
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
      let details = {
        hp: data.stats[0].base_stat,
        atk: data.stats[1].base_stat,
        def: data.stats[2].base_stat,
        satk: data.stats[3].base_stat,
        sdef: data.stats[4].base_stat,
        spd: data.stats[5].base_stat,
      };
      setDetails(details);
      console.log(data.stats[0].base_stat);
    }
    loadPokemonsDetails();
  }, [id]);

  return (
    <Container>
      <thead>
        <TableTitle>Base Stats</TableTitle>
      </thead>
      <tbody>
        <tr>
          <TableStats>HP</TableStats>
          <TableResults>{details.hp}</TableResults>
          <td>
            <input type="range" name="" id="" />
          </td>
        </tr>
        <tr>
          <TableStats>ATK</TableStats>
          <TableResults>{details.atk}</TableResults>
          <td>
            <input type="range" name="" id="" />
          </td>
        </tr>
        <tr>
          <TableStats>DEF</TableStats>
          <TableResults>{details.def}</TableResults>
          <td>
            <input type="range" name="" id="" />
          </td>
        </tr>
        <tr>
          <TableStats>SATK</TableStats>
          <TableResults>{details.satk}</TableResults>
          <td>
            <input type="range" name="" id="" />
          </td>
        </tr>
        <tr>
          <TableStats>SDEF</TableStats>
          <TableResults>{details.sdef}</TableResults>
          <td>
            <input type="range" name="" id="" />
          </td>
        </tr>
        <tr>
          <TableStats>SPD</TableStats>
          <TableResults>{details.spd}</TableResults>
          <td>
            <input type="range" name="" id="" />
          </td>
        </tr>
      </tbody>
    </Container>
  );
};
