import { DisplayConfig } from '@directus/shared/types';


export function getSharedConfigOptions(isString: boolean) {
  const options: DisplayConfig['options'] = [
    {
      field: 'showCopy',
      name: 'Display copy icon',
      type: 'boolean',
      meta: {
        width: 'full',
        interface: 'boolean',
        options: {
          label: 'Display a copy button next to the item',
        },
      },
      schema: {
        default_value: false,
      },
    },
    {
      field: 'copyPosition',
      name: 'Copy icon position',
      type: 'string',
      meta: {
        width: 'half',
        interface: 'select-radio',
        options: {
          choices: [
            { text: 'Start', value: 'start' },
            { text: 'End', value: 'end' }
          ],
        },
      },
      schema: {
        default_value: 'end',
      },
    },
    {
      field: 'copyPrefix',
      name: 'Copy value prefix',
      type: 'string',
      meta: {
        width: 'half',
        interface: 'select-dropdown',
        options: {
          placeholder: 'Enter prefix or select variable',
          choices: [
            { text: '$project_url', value: '$project_url' },
            { text: 'https://', value: 'https://' }
          ],
          allowOther: true,
          allowNone: true,
        },

      },
      schema: {
        default_value: '',
      },
    },
    {
      field: 'showLink',
      name: 'Display link icon',
      type: 'boolean',
      meta: {
        width: 'full',
        interface: 'boolean',
        options: {
          label: 'Display a link button next to the item',
        },
      },
      schema: {
        default_value: false,
      },
    },
    {
      field: 'linkPosition',
      name: 'Link icon position',
      type: 'string',
      meta: {
        width: 'half',
        interface: 'select-radio',
        options: {
          choices: [
            { text: 'Start', value: 'start' },
            { text: 'End', value: 'end' }
          ],
        },
      },
      schema: {
        default_value: 'end',
      },
    },
    {
      field: 'linkPrefix',
      name: 'Link value prefix',
      type: 'string',
      meta: {
        width: 'half',
        interface: 'select-dropdown',
        options: {
          placeholder: 'Enter prefix or select variable',
          choices: [
            { text: '$project_url', value: '$project_url' },
            { text: 'Mail-Link (mailto:)', value: 'mailto:' },
            { text: 'Phole-Link (tel:)', value: 'tel:' },
            { text: 'https://', value: 'https://' }
          ],
          allowOther: true,
          allowNone: true,
        },

      },
      schema: {
        default_value: '',
      },
    },
  ];

  return options;
}


// dynamically build push Options
// TODO: allow link only if phone, url or mail is selected
export function getClickActionChoices(isString: boolean) {
	const selectChoices = [
		{
			text: 'Copy to clipboard',
			value: 'copy',
		},{
			text: 'Default click action',
			value: 'default',
		},
	];

	if (isString) {
		selectChoices.push(
			{
				text: 'Open link',
				value: 'link',
			},
		);
	}

	return selectChoices;
}