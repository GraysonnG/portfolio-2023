import type { BlogData } from '../api/client';

export function blogDataToHtml(data: BlogData, subtitle: Boolean): string {
    return data.content.map(block => {
        const childHTML = block.children.map(child => {
          let type = child._type;
          let classlist = child.marks;

          if (subtitle) {
            return `${child.text}`
          } else {
            return `<${type} class="${
              classlist.join(' ')
            }">${child.text}</${type}>`;
          }
        }).join('');
        return `<p>${childHTML}</p>`;
    }).join('');
}