import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useQueryClient, useMutation } from '@tanstack/react-query';

import { updateNews as updateNewsBySlug } from '../services/apiInteresting';

const useUpdateNews = (slug) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: editingLoading, mutate: updateNews } = useMutation({
    mutationFn: (data) => updateNewsBySlug(data, slug),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['news'],
      });
      toast.success('Статията е променена успешно!');
      navigate('/admin/interesno');
    },
    onError: (error) => toast.error(error.message),
  });

  return { updateNews, editingLoading };
};

export default useUpdateNews;
