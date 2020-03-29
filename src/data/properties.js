import characters from './characters'

const { FRANKLIN, MICHAEL, TREVOR } = characters
const allCharacters = [FRANKLIN, MICHAEL, TREVOR]

export default [
  {
    name: `Towing Impound`,
    purchasePrice: 150000,
    income: [
      {
        amount: 500,
        unit: `vehicle towed`,
      },
    ],
    additionalPerk: null,
    potentialOwners: [FRANKLIN],
  },
  {
    name: `Downtown Cab Co.`,
    purchasePrice: 200000,
    income: [
      {
        amount: 2000,
        unit: `week`,
      },
    ],
    additionalPerk: `Free cab rides for Franklin`,
    potentialOwners: [FRANKLIN],
  },
  {
    name: `Los Santos Custom`,
    purchasePrice: 349000,
    income: [
      {
        amount: 1600,
        unit: `week`,
      },
    ],
    additionalPerk: `Free upgrades at purchased garage for Franklin`,
    potentialOwners: [FRANKLIN],
  },
  {
    name: `Smoke on the Water`,
    purchasePrice: 204000,
    income: [
      {
        amount: 9300,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: [FRANKLIN],
  },
  {
    name: `Hookies`,
    purchasePrice: 600000,
    income: [
      {
        amount: 4700,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: [FRANKLIN, MICHAEL],
  },
  {
    name: `Cinema Doppler`,
    purchasePrice: 10000000,
    income: [
      {
        amount: 132200,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: [MICHAEL],
  },
  {
    name: `Ten Cent Theater`,
    purchasePrice: 20000000,
    income: [
      {
        amount: 264000,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: [MICHAEL],
  },
  {
    name: `Tivoli Cinema`,
    purchasePrice: 30000000,
    income: [
      {
        amount: 142300,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: [MICHAEL],
  },
  {
    name: `McKenzie Field Hangar`,
    purchasePrice: 150000,
    income: [
      {
        amount: 5000,
        unit: `ground mission`,
      },
      {
        amount: 7000,
        unit: `air mission`,
      },
    ],
    additionalPerk: null,
    potentialOwners: [TREVOR],
  },
  {
    name: `Car Scrapyard`,
    purchasePrice: 275000,
    income: [
      {
        amount: 150,
        unit: `vehicle scrapped`,
      },
    ],
    additionalPerk: null,
    potentialOwners: allCharacters,
  },
  {
    name: `Tequi-la-la`,
    purchasePrice: 2000000,
    income: [
      {
        amount: 16500,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: allCharacters,
  },
  {
    name: `Pitchers`,
    purchasePrice: 750000,
    income: [
      {
        amount: 7100,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: allCharacters,
  },
  {
    name: `The Hen House`,
    purchasePrice: 80000,
    income: [
      {
        amount: 920,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: allCharacters,
  },
  {
    name: `Sonar Collections Dock`,
    purchasePrice: 250000,
    income: [
      {
        amount: 23000,
        unit: `nuclear waste barrel found`,
      },
    ],
    additionalPerk: null,
    potentialOwners: allCharacters,
  },
  {
    name: `Los Santos Golf Club`,
    purchasePrice: 150000000,
    income: [
      {
        amount: 264500,
        unit: `week`,
      },
    ],
    additionalPerk: null,
    potentialOwners: allCharacters,
  },
]
