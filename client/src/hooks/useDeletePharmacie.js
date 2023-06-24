import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteProductById } from '../services/apiPromoProducts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { deletePharmacieBySlug } from '../services/apiPharmacies';

const useDeletePharmacie = (slug) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: deletingLoading, mutate: deletePharmacie } = useMutation({
    mutationFn: () => deletePharmacieBySlug(slug),
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
