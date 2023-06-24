import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { deletePharmacieBySlug } from '../services/apiPharmacies';

const useDeletePharmacie = (slug, user) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: deletingLoading, mutate: deletePharmacie } = useMutation({
    mutationFn: () => deletePharmacieBySlug(slug, user.token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['pharmacies'],
      });

      toast.success('Аптеката е изтрит успешно!');
      navigate('/admin/pharmacies');
    },
    onError: (error) => toast.error(error.message),
  });

  return { deletingLoading, deletePharmacie };
};

export default useDeletePharmacie;
