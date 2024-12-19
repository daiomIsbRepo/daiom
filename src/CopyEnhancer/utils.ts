export const enhanceCopy = async (formData: any) => {
  const response = await fetch('https://4hxh76qgti.execute-api.ap-south-1.amazonaws.com/dev/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      improvementContext: Array.isArray(formData.improvementContext) 
        ? formData.improvementContext.join(',') 
        : formData.improvementContext,
      tool: 'Enhancer'
    })
  });

  if (!response.ok) {
    throw new Error('Failed to enhance copy');
  }

  const data = await response.json();
  return data.response || 'No content generated';
};

export const formatContent = (content: string) => {
  return content.split('\\n').map((line, index, array) => ({
    text: line,
    isLastLine: index === array.length - 1
  }));
};