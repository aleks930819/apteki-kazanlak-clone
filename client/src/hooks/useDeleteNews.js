import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { deleteNewsBySlug } from '../services/apiInteresting';

const useDeleteNews = (slug,user) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: deletingLoading, mutate: deleteNews } = useMutation({
    mutationFn: () => deleteNewsBySlug(slug,user.token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['news'],
      });

      toast.success('Статията е изтрита успешно!');
      navigate('/admin/interesno');
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteNews, deletingLoading };
};

export default useDeleteNews;
