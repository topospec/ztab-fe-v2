// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { format, subDays, addDays } from 'date-fns';

export default async function handler(req, res) {

  const today = new Date();
  const formattedToday = format(today, 'yyyy-MM-dd');

  console.log("Requesting data for date:", formattedToday);
  const response = await axios.get(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/31/${formattedToday}/${formattedToday}`, {
      httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
  });

  const data = response.data.results[0];

  res.status(200).send(data.valor.toString());
}
